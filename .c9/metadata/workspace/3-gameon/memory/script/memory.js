{"changed":true,"filter":false,"title":"memory.js","tooltip":"/3-gameon/memory/script/memory.js","value":"\"use strict\";\n\nvar Memory = {\n    turned: 0,     //håller reda på om 1 bricka redan vänts upp.\n    lastTurned: null,    //håller reda på vad förra brickan hade för array-index\n    thisTurned: null,    //håller reda på vad denna bricka har för array-index\n    maxTurned: null,    //används för att kolla när man vinner.    \n    \n    init: function(){\n        var cols = 4;   \n        var rows = 4;\n        var picArray = RandomGenerator.getPictureArray(cols, rows);\n        Memory.maxTurned = cols * rows;    //håller reda på hur många brickor som ska vara vända när man vinner.\n        \n        \n        \n        Memory.generateAll(picArray);\n    },\n    \n    newGame: function(){\n        var cols = 4;\n        var rows = 4;\n        var picArray = RandomGenerator.getPictureArray(cols, rows);\n        var maxTurned = cols * rows;\n    },\n    \n    generateAll: function(picArray) {\n        for (var i = 0; i < picArray.length; i++) {\n            var arrayIndex = picArray[i];\n            var thisPic = arrayIndex;\n            Memory.generatePic(thisPic);\n        }\n        return false;\n    },\n    \n    generatePic: function(thisPic) {\n        var memory = document.getElementById(\"memory\");\n        var picture = document.createElement(\"img\");\n        \n        picture.setAttribute(\"src\", \"memory/pics/\" + 0+\".png\");\n        memory.appendChild(picture);\n        \n        picture.onclick = function() {\n            picture.removeAttribute(\"src\");\n            picture.setAttribute(\"src\", \"memory/pics/\" + thisPic + \".png\");\n            \n        console.log(Memory.lastTurned);\n        \n        if (Memory.lastTurned === thisPic) {\n            Memory.matchingBricks();\n        }\n        \n        else {\n        //Ändra tillbaka efter lite tid\n            setTimeout(function(){\n                picture.removeAttribute(\"src\");\n                picture.setAttribute(\"src\", \"memory/pics/\" + 0 + \".png\"); \n            }, 2000);             \n        }\n        \n        Memory.lastTurned = thisPic;\n        \n\n            \n        };\n        \n        return false;\n    },\n    \n    //När två brickor matchas körs denna funktion:\n    matchingBricks: function() {\n        Memory.turned += 2;\n        console.log(\"Nu äre \" + Memory.turned);\n        if (Memory.turned === Memory.maxTurned) {\n            alert(\"Du vann!\");\n        }\n    }\n\n    \n    \n};\n\nwindow.onload = Memory.init;\n\n\n\n\n","undoManager":{"mark":97,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":72,"column":13},"end":{"row":72,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":14},"end":{"row":72,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":15},"end":{"row":72,"column":16},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":16},"end":{"row":72,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":17},"end":{"row":72,"column":19},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":18},"end":{"row":72,"column":20},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":19},"end":{"row":72,"column":20},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":20},"end":{"row":72,"column":21},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":21},"end":{"row":72,"column":22},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":22},"end":{"row":72,"column":23},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":23},"end":{"row":72,"column":24},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":24},"end":{"row":72,"column":25},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":25},"end":{"row":72,"column":26},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":26},"end":{"row":72,"column":27},"action":"insert","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":29},"end":{"row":72,"column":30},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":20},"end":{"row":6,"column":24},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":28},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":28},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":20},"end":{"row":6,"column":28},"action":"remove","lines":["        "]},{"start":{"row":6,"column":20},"end":{"row":6,"column":24},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["ä"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":35},"end":{"row":6,"column":36},"action":"insert","lines":["ö"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":36},"end":{"row":6,"column":37},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":37},"end":{"row":6,"column":38},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":38},"end":{"row":6,"column":39},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":40},"end":{"row":6,"column":41},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":41},"end":{"row":6,"column":42},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":42},"end":{"row":6,"column":43},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":43},"end":{"row":6,"column":44},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":44},"end":{"row":6,"column":45},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":48},"end":{"row":6,"column":49},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":49},"end":{"row":6,"column":50},"action":"insert","lines":["ä"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":53},"end":{"row":6,"column":54},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":54},"end":{"row":6,"column":55},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":55},"end":{"row":6,"column":56},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":56},"end":{"row":6,"column":57},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":57},"end":{"row":6,"column":58},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":58},"end":{"row":6,"column":59},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":59},"end":{"row":6,"column":60},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":60},"end":{"row":6,"column":61},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":61},"end":{"row":6,"column":62},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":62},"end":{"row":6,"column":63},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":4},"end":{"row":49,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":8},"end":{"row":49,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":4},"end":{"row":48,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":8},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":8},"end":{"row":52,"column":0},"action":"insert","lines":["",""]},{"start":{"row":52,"column":0},"end":{"row":52,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":8},"end":{"row":53,"column":0},"action":"insert","lines":["",""]},{"start":{"row":53,"column":0},"end":{"row":53,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":8},"end":{"row":52,"column":9},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":9},"end":{"row":52,"column":10},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":10},"end":{"row":52,"column":11},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":11},"end":{"row":52,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":12},"end":{"row":52,"column":16},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":16},"end":{"row":52,"column":20},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":12},"end":{"row":52,"column":20},"action":"remove","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":12},"end":{"row":52,"column":13},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":13},"end":{"row":52,"column":14},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":14},"end":{"row":52,"column":15},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":14},"end":{"row":54,"column":8},"action":"insert","lines":["","            ","        "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":9},"end":{"row":50,"column":10},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":10},"end":{"row":50,"column":11},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":10},"end":{"row":50,"column":11},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":9},"end":{"row":50,"column":10},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":4},"end":{"row":53,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":8},"end":{"row":53,"column":12},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":0},"end":{"row":62,"column":24},"action":"remove","lines":["        /*    //Ändra tillbaka efter lite tid","            setTimeout(function(){","                picture.removeAttribute(\"src\");","                picture.setAttribute(\"src\", \"memory/pics/\" + 0 + \".png\"); ","            }, 2000); */"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":57,"column":24},"action":"insert","lines":["        /*    //Ändra tillbaka efter lite tid","            setTimeout(function(){","                picture.removeAttribute(\"src\");","                picture.setAttribute(\"src\", \"memory/pics/\" + 0 + \".png\"); ","            }, 2000); */"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":23},"end":{"row":57,"column":24},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":22},"end":{"row":57,"column":23},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":9},"end":{"row":53,"column":10},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":8},"end":{"row":53,"column":9},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":8},"end":{"row":59,"column":9},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":9},"end":{"row":59,"column":10},"action":"insert","lines":["d"]},{"start":{"row":59,"column":10},"end":{"row":59,"column":11},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":8},"end":{"row":59,"column":11},"action":"remove","lines":["gdk"]}]}]]},"ace":{"folds":[],"scrolltop":450.90903902053833,"scrollleft":0,"selection":{"start":{"row":58,"column":9},"end":{"row":58,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":32,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1420146339995}