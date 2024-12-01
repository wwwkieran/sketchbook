import init, {p5SVG} from "p5.js-svg";
import * as P5 from "p5";
import {defaultKeys} from "./helpers/key_pressed";
import {maxHeight, maxWidth, setAspectRatioStr} from "./helpers/aspect_ratio";
import {defaultPaneHelpers, initPaneAtLeft} from "./helpers/tweakpane";
import {setBackground} from "./helpers/color";

// Description: Patterns for re(mediation) studio project.
// Date: 12/1/24 02:31:14Z

//Constants
const PERIMETER = "perimeter";
const RANDOM = "random";
const NEXTADJ = "nextadj";
const BRANCHING = "branching";


const params = {
    layers: 5,
    radius: 50,
};
const {pane, uiWidth} = initPaneAtLeft(1.1, {title: "Circles"});
pane.addBinding(params, "layers");
pane.addBinding(params, "radius");

interface LightEffect {
    // intensity: number;
    // color: string;
    // direction: number;
    pattern: string;

}

const activeHexagons = new Set<string>;
let state = new Map<string, LightEffect[]>();
// state.set("0 0 0", [{pattern: BRANCHING}]);
// state.set("-1 0 2", [{pattern: PERIMETER}]);
state.set("0 0 0", [{pattern: RANDOM}]);
// state.set("0 0 0", [{pattern: RANDOM}]);
// state.set("0 0 0", [{pattern: RANDOM}]);
// state.set("0 0 0", [{pattern: RANDOM}]);
// state.set("0 0 0", [{pattern: RANDOM}]);
// state.set("0 0 1", [{pattern: RANDOM}]);
// state.set("0 0 2", [{pattern: RANDOM}]);
// state.set("0 0 4", [{pattern: RANDOM}]);
// state.set("0 0 5", [{pattern: RANDOM}]);
// state.set("0 2 0", [{pattern: RANDOM}]);
// state.set("0 -2 3", [{pattern: PERIMETER}]);
// state.set("2 2 2", [{pattern: PERIMETER}]);
// state.set("3 4 2", [{pattern: PERIMETER}]);
activeHexagons.add("0 0");

init(P5);
const sketch = (s: p5SVG) => {
    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        setBackground(s.color("#999999"));
        setAspectRatioStr(s, "1x1", maxWidth(800, uiWidth), maxHeight());
        defaultPaneHelpers(pane, s, sketch, maxWidth(800, uiWidth));
        s.frameRate(10);
    };

    s.draw = () => {
        advanceHexState();
        s.background(255);
        s.translate(s.width/2, s.height/2);
        drawHexGrid(s, params.layers);

    };

    s.mousePressed = () => {
        const {q, r} = pixelToAxial(s.mouseX - s.width/2, s.mouseY - s.height/2);
        const key = q.toString() + " "  + r.toString();
        if (activeHexagons.has(key)) {
            activeHexagons.delete(key);
        } else {
            activeHexagons.add(key);
        }
        console.log(key);
    };

    s.mouseReleased = () => {
    };

    s.mouseDragged = () => {

    };

    s.keyPressed = () => {
        defaultKeys(s, sketch);
    };

};

function decodeStateKey(key: string) {
    const v = key.split(" ");
    const q = parseInt(v[0]);
    const r = parseInt(v[1]);
    const edge = parseInt(v[2]);
    return {q, r, edge};
}

function encodeKey(q: number, r: number, edge?: number) {
    let key = q.toString() + " "  + r.toString();
    if (edge !== undefined) {
        key += " " + edge.toString();
    }
    return key;
}

function mapAppend(map: Map<string, LightEffect[]>, key: string, value: LightEffect) {
    if (!map.has(key)) {
        map.set(key, []);
    }
    map.get(key).push(value);
}

function advanceHexState() {
    const newState = new Map<string, LightEffect[]>();
    state.forEach((effects, key) => {
        const {q, r, edge} = decodeStateKey(key);

        for (const effect of effects) {
            let s;
            if (effect.pattern === PERIMETER) {
                s = perimeterEffect(q, r, edge, effect);
            } else if (effect.pattern === RANDOM) {
                s = randomEffect();
            } else if (effect.pattern === NEXTADJ) {
                s = nextAdjEffect(q, r, edge, effect);
            } else if (effect.pattern === BRANCHING) {
                s = branchingEffect(q, r, edge, effect);
            }
            for (const entry of s) {
                mapAppend(newState, encodeKey(entry.newQ, entry.newR, entry.newEdge), effect);
            }
        }
    });
    state = newState;
}

function randomEffect() {
    const activeHexArray = Array.from(activeHexagons);
    const randomElement = activeHexArray[Math.floor(Math.random() * activeHexArray.length)];
    const v = randomElement.split(" ");
    const newQ = parseInt(v[0]);
    const newR = parseInt(v[1]);
    const newEdge = Math.floor(Math.random() * 5);

    return [{newQ, newR, newEdge}];
}

function perimeterEffect(q: number, r: number, edge: number, effect: LightEffect) {

    const nextEdgeInHexagon = (edge + 1) % 6;

    let newQ = q;
    let newR = r;
    let newEdge = nextEdgeInHexagon;
    const adj = edgeIsAdjacentToLiveHexagon(q, r, nextEdgeInHexagon);
    if (adj !== undefined) {
        newQ = adj.newQ;
        newR = adj.newR;
        newEdge = (adj.newEdge + 1) % 6;
    }

    return [{newQ, newR, newEdge}];
}

function nextAdjEffect(q: number, r: number, edge: number, effect: LightEffect) {

    const nextEdgeInHexagon1 = (edge + 1) % 6;
    const nextEdgeInHexagon2 = (edge - 1) % 6;

    const newQ = q;
    const newR = r;
    const newEdge = nextEdgeInHexagon1;
    const adj1 = edgeIsAdjacentToLiveHexagon(q, r, nextEdgeInHexagon1);
    const adj2 = edgeIsAdjacentToLiveHexagon(q, r, nextEdgeInHexagon2);
    if (adj1 !== undefined) {
        return [adj1];
    } else if (adj2 !== undefined) {
        return [adj2];
    }

    return [{newQ, newR, newEdge}];
}

function branchingEffect(q: number, r: number, edge: number, effect: LightEffect) {

    const nextEdgeInHexagonClockwise = (edge + 1) % 6;
    const nextEdgeInHexagonCounterClockwise = (edge - 1) % 6;

    const out = [
        {
            newQ: q,
            newR: r,
            newEdge: nextEdgeInHexagonClockwise
        },{
            newQ: q,
            newR: r,
            newEdge: nextEdgeInHexagonCounterClockwise
        },];
    const adj = edgeIsAdjacentToLiveHexagon(q, r, edge);
    if (adj !== undefined) {
        out.push(adj);
    }

    out.map((v) => {
        if (!state.has(encodeKey(v.newQ, v.newR, v.newEdge))) {
            return v;
        }
    });

    out.push({
        newQ: q,
        newR: r,
        newEdge: edge
    });
    return out;
}

// returns the coord of the adj edge if it exists, else undefined
function edgeIsAdjacentToLiveHexagon(q: number, r: number, edge: number) {
    let newQ = q;
    let newR = r;
    const newEdge = (edge + 3) % 6;

    switch (edge) {
    case 0:
        newQ += 1;
        break;
    case 1:
        newR += 1;
        break;
    case 2:
        newQ -= 1;
        newR += 1;
        break;
    case 3:
        newQ -= 1;
        break;
    case 4:
        newR -= 1;
        break;
    case 5:
        newQ += 1;
        newR -= 1;
        break;
    }

    if (activeHexagons.has(encodeKey(newQ, newR))) {
        return {newQ, newR, newEdge};
    }
    return undefined;
}

function drawHexGrid(s: p5SVG, layers: number) {
    for (let q = -layers; q <= layers; q++) {
        for (let r = Math.max(-layers, -q - layers); r <= Math.min(layers, -q + layers); r++) {
            drawHexagon(s, q, r);
        }
    }
}

function axialToPixel(q: number, r: number) {
    const x = params.radius * (3/2 * q);
    const y = params.radius * (Math.sqrt(3) * (r + q/2));
    return { x, y };
}

function pixelToAxial(x: number, y: number) {
    const q = Math.round((2/3 * x) / params.radius);
    const r = Math.round((-1/3 * x + Math.sqrt(3)/3 * y) / params.radius);
    return { q, r };
}

function drawHexagon(s: p5SVG, q: number, r: number) {
    const { x, y } = axialToPixel(q, r);
    const key = encodeKey(q, r);

    // s.beginShape();
    // for (let i = 0; i < 6; i++) {
    //     const angle = s.TWO_PI / 6 * i;
    //     const xOffset = x + params.radius * s.cos(angle);
    //     const yOffset = y + params.radius * s.sin(angle);
    //     s.vertex(xOffset, yOffset);
    // }
    // s.endShape(s.CLOSE);

    if (activeHexagons.has(key)) {
        s.push();
        s.strokeWeight(5);
        s.stroke(230);
        // const lineColors = ["#eb4034", "#addb23", "#23dbb6", "#4523db", "#b023db", "#ff7ddc"];

        let prevVertex = null;
        for (let i = 0; i < 7; i++) {
            const angle = s.TWO_PI / 6 * i;
            const xOffset = x + (params.radius - 5) * s.cos(angle);
            const yOffset = y + (params.radius - 5) * s.sin(angle);
            if (prevVertex !== null) {
                // Values of i correspond to different edges
                // 1 - SE
                // 2 - S
                // 3 - SW
                // 4 - NW
                // 5 - N
                // 6 - NE

                if (state.has(encodeKey(q, r, i - 1))) {
                    s.stroke(100);
                } else {
                    // s.stroke(230);
                    s.stroke(255);
                }

                //
                s.line(
                    prevVertex.xOffset,
                    prevVertex.yOffset,
                    xOffset,
                    yOffset,
                );
            }
            prevVertex = {xOffset, yOffset};
        }
        s.pop();
    }

}

new P5(sketch, document.body);