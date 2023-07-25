module.exports = function regCheck(GP, EC, MP, L){
    return GP.endsWith(EC, MP, L);
    }
    console.log(regCheck('DC 55 YU GP', 'GP'));
    console.log(regCheck('DC 55 YU GP', 'EC'));
    console.log(regCheck('5566 L', 'L'));
    console.log(regCheck('5566 L', 'M'));
    console.log(regCheck('ERT 123 EC', 'EC'));
    console.log(regCheck('ERT 123 EC', 'GP'));
    console.log(regCheck('FGT 123 MP', 'MP'));
    console.log(regCheck('FGT 123 MM', 'MP'));