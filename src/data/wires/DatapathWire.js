export const datapathWireCoordinates = [
    {
        id: "imem-to-decoder",
        points: [
            { x: 150, y: 120 },
            { x: 110, y: 120 },
            { x: 110, y: 530 },
            { x: 150, y: 530 },
        ],
        arrowEnd: true,
    },
    {
        id: "opcode-to-control",
        points: [
            { x: 250, y: 270 },
            { x: 490, y: 270 },
        ],
        arrowEnd: false,
    },
    {
        id: "rs-to-rr1",
        points: [
            { x: 250, y: 380 },
            { x: 460, y: 415 },
            { x: 520, y: 415 },
        ],
        arrowEnd: true,
    },
    {
        id: "rt-to-rr2",
        points: [
            { x: 250, y: 480 },
            { x: 460, y: 445 },
            { x: 520, y: 445 },
        ],
        arrowEnd: true,
    },
    {
        id: "rt-to-regdst",
        points: [
            { x: 300, y: 472 },
            { x: 300, y: 560 },
            { x: 400, y: 560 },
        ],
        arrowEnd: false,
    },
    {
        id: "rd-to-regdst",
        points: [
            { x: 250, y: 600 },
            { x: 400, y: 600 },
        ],
        arrowEnd: false,
    },
    {
        id: "regdst-to-wr",
        points: [
            { x: 440, y: 590 },
            { x: 460, y: 530 },
            { x: 520, y: 530 },
        ],
        arrowEnd: true,
    },
    {
        id: "funct-to-signext",
        points: [
            { x: 250, y: 760 },
            { x: 520, y: 760 },
        ],
        arrowEnd: false,
    },
    {
        id: "signext-to-shift",
        points: [
            { x: 670, y: 760 },
            { x: 735, y: 760 },
            { x: 735, y: 240 },
        ],
        arrowEnd: false,
    },
    {
        id: "signext-to-alusrc",
        points: [
            { x: 735, y: 665 },
            { x: 800, y: 665 },
        ],
        arrowEnd: false,
    },
    {
        id: "pc-to-adder",
        points: [
            { x: 435, y: 75 },
            { x: 520, y: 75 },
        ],
        arrowEnd: true,
    },
    {
        id: "pc-to-imem",
        points: [
            { x: 450, y: 75 },
            { x: 450, y: 195 },
            { x: 300, y: 195 },
        ],
        arrowEnd: true,
    },
    {
        id: "pc-plus-4",
        points: [
            { x: 480, y: 130 },
            { x: 520, y: 130 },
        ],
        arrowEnd: true,
    },
    {
        id: "adder-to-pcsrc-top",
        points: [
            { x: 600, y: 100 },
            { x: 1160, y: 100 },
        ],
        arrowEnd: true,
    },
    {
        id: "adder-to-adder",
        points: [
            { x: 735, y: 100 },
            { x: 735, y: 155 },
            { x: 1010, y: 155 },
        ],
        arrowEnd: true,
    },
    {
        id: "shift-to-adder",
        points: [
            { x: 820, y: 210 },
            { x: 1010, y: 210 },
        ],
        arrowEnd: true,
    },
    {
        id: "adder-to-pcsrc-bottom",
        points: [
            { x: 1090, y: 180 },
            { x: 1160, y: 180 },
        ],
        arrowEnd: true,
    },
    {
        id: "pcsrc-to-pc",
        points: [
            { x: 1200, y: 145 },
            { x: 1240, y: 145 },
            { x: 1240, y: 20 },
            { x: 405, y: 20 },
            { x: 405, y: 50 },
        ],
        arrowEnd: true,
    },
    {
        id: "rd1-to-alu",
        points: [
            { x: 670, y: 415 },
            { x: 920, y: 415 },
        ],
        arrowEnd: true,
    },
    {
        id: "rd2-to-alusrc",
        points: [
            { x: 670, y: 575 },
            { x: 800, y: 575 },
        ],
        arrowEnd: false,
    },
    {
        id: "rd2-to-dmem",
        points: [
            { x: 770, y: 575 },
            { x: 770, y: 730 },
            { x: 1110, y: 730 },
        ],
        arrowEnd: true,
    },
    {
        id: "alusrc-to-alu",
        points: [
            { x: 840, y: 620 },
            { x: 920, y: 620 },
        ],
        arrowEnd: true,
    },
    {
        id: "alu-to-dmem",
        points: [
            { x: 1030, y: 565 },
            { x: 1110, y: 565 },
        ],
        arrowEnd: true,
    },
    {
        id: "dmem-to-memtoreg",
        points: [
            { x: 1280, y: 700 },
            { x: 1340, y: 700 },
        ],
        arrowEnd: true,
    },
    {
        id: "alu-to-memtoreg",
        points: [
            { x: 1070, y: 565 },
            { x: 1070, y: 770 },
            { x: 1340, y: 770 },
        ],
        arrowEnd: true,
    },
    {
        id: "memtoreg-to-wd",
        points: [
            { x: 1380, y: 740 },
            { x: 1400, y: 740 },
            { x: 1400, y: 815 },
            { x: 480, y: 815 },
            { x: 480, y: 615 },
            { x: 520, y: 615 },
        ],
        arrowEnd: true,
    },
]
