function exercise151i() {

    /*
                          space1 hash space2 hash space1
        #            #         0    1     12    1      0
         ##        ##          1    2      8    2      1
          ###    ###           2    3      4    3      2 
           ########            3    4      0    4      3
           ########
          ###    ###
         ##        ##
        #            #        
    */

    for (let row = 0; row < 4; row++) {        
        writeFancyRow(row);
    }
    for (let row = 3; row >= 0; row--) {
        writeFancyRow(row);
    }
}

function writeFancyRow(row) {
    const space1 = row;
    const hash = row + 1;
    const space2 = 12 - row * 4;

    for (let col = 0; col < space1; col++) {
        writeSpace();
    }
    for (let col = 0; col < hash; col++) {
        writeHash();
    }
    for (let col = 0; col < space2; col++) {
        writeSpace();
    }
    for (let col = 0; col < hash; col++) {
        writeHash();
    }
    for (let col = 0; col < space1; col++) {
        writeSpace();
    }

    writeLineBreak();
}

function exercise151h() {
    for (let row = 3; row >= 0; row--) {
        writeRow(row);
    }
    for (let row = 0; row < 4; row++) {
        writeRow(row);
    }
}

function exercise151g() {
    for (let row = 0; row < 4; row++) {
        writeRow(row);
    }
}

function writeRow(row) {
    for (let col = 0; col < row; col++) {
        writeSpace();
    }
    for (let col = 0; col < 8 - row * 2; col++) {
        writeHash();
    }
    writeLineBreak();
}

// function exercise151g() {
//     let charactersPerRow = 8;
//     let spaceCount = 0;
//     for (let row = 0; row < 4; row++) {
//         for (let col = 0; col < spaceCount; col++) {
//             writeSpace();
//         }
//         for (let col = 0; col < charactersPerRow; col++) {
//             writeHash();
//         }
//         writeLineBreak();
//         charactersPerRow -= 2;
//         spaceCount++;
//     }
// }

function writeHash() {
    document.getElementById('output').innerText += '#';
}

function writeSpace() {
    document.getElementById('output').innerText += ' ';
}

function writeLineBreak() {
    document.getElementById('output').innerText += '\n';
}