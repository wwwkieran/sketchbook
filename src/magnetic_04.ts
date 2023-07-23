import init, {p5SVG} from "p5.js-svg";
import * as P5 from "p5";
import {defaultKeys} from "./helpers/key_pressed";
import {point} from "./helpers/point";

// Description: Magnetic_02 but line length changes depending on how close line is to the point.
// Date: 07/22/2023 12:01:00Z

init(P5);
const NUM_LINES = 50;
const NUM_ROWS: number = 50;
const points: point[] = Array(NUM_ROWS * NUM_LINES).fill({x: window.innerWidth / 2, y: window.innerHeight / 2});
const radius: number = 100;
const maxLen: number = 30;

const sketch = (s: p5SVG) => {
    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
    };

    s.draw = () =>  {
        function endPointAlongLineAtDist(start: point, end: point, d: number): point {
            const vec: point = {x: end.x-start.x, y: end.y-start.y};
            const dist = s.sqrt((vec.x*vec.x) + (vec.y*vec.y));
            return{x: start.x + d*(vec.x/dist), y: start.y + d*(vec.y/dist)};
        }

        function determineIndex(row: number, column: number): number {
            return row * NUM_LINES + column;
        }

        function dist(start: point, end: point): number {
            const vec: point = {x: end.x-start.x, y: end.y-start.y};
            return s.sqrt((vec.x*vec.x) + (vec.y*vec.y));
        }

        // towardsPt = {x: s.mouseX, y: s.mouseY};

        s.background(0);
        s.stroke(255);
        s.noFill();

        const leftCorner = {x: window.innerWidth / 2 - 15 * NUM_LINES/2, y: window.innerHeight / 2 - 15 * NUM_ROWS/2};

        for (let row = 0; row < NUM_ROWS; row++) {
            for (let i = 0; i < NUM_LINES; i++) {
                const centerPt = {x: leftCorner.x + i * 15, y: leftCorner.y + 15 * row};
                if (dist(centerPt, {x: s.mouseX, y: s.mouseY}) <= radius) {
                    points[determineIndex(row, i)] = {x: s.mouseX, y: s.mouseY};
                }

                const towardsPt = points[determineIndex(row, i)];
                const d = Math.min(1 + maxLen*(Math.pow(dist(centerPt, towardsPt), 1.5)/Math.pow(radius, 1.5)), maxLen);
                const endPt = endPointAlongLineAtDist(centerPt, towardsPt, d/2);
                const startPt = endPointAlongLineAtDist(centerPt, towardsPt, -1 * d/2);



                s.stroke(255);
                s.line(startPt.x, startPt.y, endPt.x, endPt.y);
            }
        }


    };

    s.keyPressed = () => {
        defaultKeys(s);
    };

};
new P5(sketch, document.body);