export const datapathWireCoordinates = [
    {
        id: "imem-to-decoder",
        points: [
            { x: 150, y: 160 },
            { x: 110, y: 160 },
            { x: 110, y: 570 },
            { x: 150, y: 570 },
        ],
        arrowEnd: true,
    }, 
    {
        id: "opcode-to-control",
        points: [
            { x: 250, y: 310 },
            { x: 490, y: 310 },
        ],
        arrowEnd: false,
    }, 
    {
        id: "rs-to-rr1",
        points: [
            { x: 250, y: 420 },
            { x: 460, y: 455 },
            { x: 520, y: 455 },
        ],
        arrowEnd: true,
    }, 
    {
        id: "rt-to-rr2",
        points: [
            { x: 250, y: 520 },
            { x: 460, y: 485 },
            { x: 520, y: 485 },
        ],
        arrowEnd: true,
    },
    {
        id: "rs-to-rr1",
        points: [
            { x: 250, y: 420 },
            { x: 460, y: 455 },
            { x: 520, y: 455 },
        ],
        arrowEnd: true,
    },
    {
        id: "rt-to-rr2",
        points: [
            { x: 250, y: 520 },
            { x: 460, y: 485 },
            { x: 520, y: 485 },
        ],
        arrowEnd: true,
    },
    {
        id: "rt-to-regdst",
        points: [
            { x: 300, y: 512 },
            { x: 300, y: 600 },
            { x: 400, y: 600 },
        ],
        arrowEnd: false,
    },
    {
        id: "rd-to-regdst",
        points: [
            { x: 250, y: 640 },
            { x: 400, y: 640 },
        ],
        arrowEnd: false,
    },
    {
        id: "regdst-to-wr",
        points: [
            { x: 440, y: 630 },
            { x: 460, y: 570 },
            { x: 520, y: 570 },
        ],
        arrowEnd: true,
    },
    {
        id: "funct-to-signext",
        points: [
            { x: 250, y: 810 },
            { x: 520, y: 810 },
        ],
        arrowEnd: false,
    },
    {
        id: "signext-to-shift",
        points: [
            { x: 670, y: 810 },
            { x: 735, y: 810 },
            { x: 735, y: 280 },
        ],
        arrowEnd: false,
    },
    {
        id: "signext-to-alusrc",
        points: [
            { x: 735, y: 705 },
            { x: 800, y: 705 },
        ],
        arrowEnd: false,
    },
    {
        id: "pc-to-adder",
        points: [
            { x: 435, y: 115 },
            { x: 520, y: 115 },
        ],
        arrowEnd: true,
    },
    {
        id: "pc-to-imem",
        points: [
            { x: 450, y: 115 },
            { x: 450, y: 235 },
            { x: 300, y: 235 },
        ],
        arrowEnd: true,
    },
    {
        id: "pc-plus-4",
        points: [
            { x: 480, y: 170 },
            { x: 520, y: 170 },
        ],
        arrowEnd: true,
    },
    {
        id: "adder-to-pcsrc-top",
        points: [
            { x: 600, y: 140 },
            { x: 1160, y: 140 },
        ],
        arrowEnd: true,
    },
    {
        id: "adder-to-adder",
        points: [
            { x: 735, y: 140 },
            { x: 735, y: 195 },
            { x: 1010, y: 195 },
        ],
        arrowEnd: true,
    },
    {
        id: "shift-to-adder",
        points: [
            { x: 820, y: 250 },
            { x: 1010, y: 250 },
        ],
        arrowEnd: true,
    },
    {
        id: "adder-to-pcsrc-bottom",
        points: [
            { x: 1090, y: 220 },
            { x: 1160, y: 220 },
        ],
        arrowEnd: true,
    },
    {
        id: "pcsrc-to-pc",
        points: [
            { x: 1200, y: 185 },
            { x: 1240, y: 185 },
            { x: 1240, y: 60 },
            { x: 405, y: 60 },
            { x: 405, y: 90 },
        ],
        arrowEnd: true,
    },
    {
        id: "rd1-to-alu",
        points: [
            { x: 670, y: 455 },
            { x: 920, y: 455 },
        ],
        arrowEnd: true,
    },
    {
        id: "rd2-to-alusrc",
        points: [
            { x: 670, y: 615 },
            { x: 800, y: 615 },
        ],
        arrowEnd: false,
    },
    {
        id: "rd2-to-dmem",
        points: [
            { x: 770, y: 615 },
            { x: 770, y: 770 },
            { x: 1110, y: 770 },
        ],
        arrowEnd: true,
    },
    {
        id: "alusrc-to-alu",
        points: [
            { x: 840, y: 660 },
            { x: 920, y: 660 },
        ],
        arrowEnd: true,
    },
    {
        id: "alu-to-dmem",
        points: [
            { x: 1030, y: 605 },
            { x: 1110, y: 605 },
        ],
        arrowEnd: true,
    },
    {
        id: "dmem-to-memtoreg",
        points: [
            { x: 1280, y: 740 },
            { x: 1340, y: 740 },
        ],
        arrowEnd: true,
    },
    {
        id: "alu-to-memtoreg",
        points: [
            { x: 1070, y: 605 },
            { x: 1070, y: 810 },
            { x: 1340, y: 810 },
        ],
        arrowEnd: true,
    },
    {
        id: "memtoreg-to-wd",
        points: [
            { x: 1380, y: 780 },
            { x: 1400, y: 780 },
            { x: 1400, y: 855 },
            { x: 480, y: 855 },
            { x: 480, y: 655 },
            { x: 520, y: 655 },
        ],
        arrowEnd: true,
    },
]


