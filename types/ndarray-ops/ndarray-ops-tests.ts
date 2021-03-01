import ndarray = require('ndarray');
import ops = require("ndarray-ops");

const data = new Int32Array(2 * 2 * 2 + 10);
const arr1 = ndarray(data, [2, 2, 2], [1, 2, 4], 5);
const arr2 = ndarray(data, [3, 3, 3], [1, 7, 9], 1);
const arr3 = ndarray(data, [4, 4, 4], [2, 8, 0], 1);

ops.add(arr1, arr2, arr3);
ops.addeq(arr1, arr2);
ops.adds(arr1, arr2, 2);
ops.addseq(arr2, 2);
ops.sub(arr1, arr2, arr3);
ops.subeq(arr1, arr2);
ops.subs(arr1, arr2, 2);
ops.subseq(arr2, 2);
ops.mul(arr1, arr2, arr3);
ops.muleq(arr1, arr2);
ops.muls(arr1, arr2, 2);
ops.mulseq(arr2, 2);
ops.div(arr1, arr2, arr3);
ops.diveq(arr1, arr2);
ops.divs(arr1, arr2, 2);
ops.divseq(arr2, 2);
ops.mod(arr1, arr2, arr3);
ops.modeq(arr1, arr2);
ops.mods(arr1, arr2, 2);
ops.modseq(arr2, 2);
ops.band(arr1, arr2, arr3);
ops.bandeq(arr1, arr2);
ops.bands(arr1, arr2, 2);
ops.bandseq(arr2, 2);
ops.bor(arr1, arr2, arr3);
ops.boreq(arr1, arr2);
ops.bors(arr1, arr2, 2);
ops.borseq(arr2, 2);
ops.bxor(arr1, arr2, arr3);
ops.bxoreq(arr1, arr2);
ops.bxors(arr1, arr2, 2);
ops.bxorseq(arr2, 2);
ops.lshift(arr1, arr2, arr3);
ops.lshifteq(arr1, arr2);
ops.lshifts(arr1, arr2, 2);
ops.lshiftseq(arr2, 2);
ops.rshift(arr1, arr2, arr3);
ops.rshifteq(arr1, arr2);
ops.rshifts(arr1, arr2, 2);
ops.rshiftseq(arr2, 2);
ops.rrshift(arr1, arr2, arr3);
ops.rrshifteq(arr1, arr2);
ops.rrshifts(arr1, arr2, 2);
ops.rrshiftseq(arr2, 2);

ops.not(arr1, arr2);
ops.noteq(arr2);
ops.bnot(arr1, arr2);
ops.bnoteq(arr2);
ops.neg(arr1, arr2);
ops.negeq(arr2);
ops.recip(arr1, arr2);
ops.recipeq(arr2);

ops.and(arr1, arr2, arr3);
ops.ands(arr1, arr2, 2);
ops.andeq(arr1, arr2);
ops.andseq(arr2, 2);
ops.or(arr1, arr2, arr3);
ops.ors(arr1, arr2, 2);
ops.oreq(arr1, arr2);
ops.orseq(arr2, 2);
ops.eq(arr1, arr2, arr3);
ops.eqs(arr1, arr2, 2);
ops.eqeq(arr1, arr2);
ops.eqseq(arr2, 2);
ops.neq(arr1, arr2, arr3);
ops.neqs(arr1, arr2, 2);
ops.neqeq(arr1, arr2);
ops.neqseq(arr2, 2);
ops.lt(arr1, arr2, arr3);
ops.lts(arr1, arr2, 2);
ops.lteq(arr1, arr2);
ops.ltseq(arr2, 2);
ops.gt(arr1, arr2, arr3);
ops.gts(arr1, arr2, 2);
ops.gteq(arr1, arr2);
ops.gtseq(arr2, 2);
ops.leq(arr1, arr2, arr3);
ops.leqs(arr1, arr2, 2);
ops.leqeq(arr1, arr2);
ops.leqseq(arr2, 2);
ops.geq(arr1, arr2, arr3);
ops.geqs(arr1, arr2, 2);
ops.geqeq(arr1, arr2);
ops.geqseq(arr2, 2);

ops.abs(arr1, arr2);
ops.abseq(arr2);
ops.acos(arr1, arr2);
ops.acoseq(arr2);
ops.asin(arr1, arr2);
ops.asineq(arr2);
ops.atan(arr1, arr2);
ops.ataneq(arr2);
ops.ceil(arr1, arr2);
ops.ceileq(arr2);
ops.cos(arr1, arr2);
ops.coseq(arr2);
ops.exp(arr1, arr2);
ops.expeq(arr2);
ops.floor(arr1, arr2);
ops.flooreq(arr2);
ops.log(arr1, arr2);
ops.logeq(arr2);
ops.round(arr1, arr2);
ops.roundeq(arr2);
ops.sin(arr1, arr2);
ops.sineq(arr2);
ops.sqrt(arr1, arr2);
ops.sqrteq(arr2);
ops.tan(arr1, arr2);
ops.taneq(arr2);

ops.max(arr1, arr2, arr3);
ops.maxs(arr1, arr2, 2);
ops.maxeq(arr1, arr2);
ops.maxseq(arr2, 2);
ops.min(arr1, arr2, arr3);
ops.mins(arr1, arr2, 2);
ops.mineq(arr1, arr2);
ops.minseq(arr2, 2);
ops.atan2(arr1, arr2, arr3);
ops.atan2s(arr1, arr2, 2);
ops.atan2eq(arr1, arr2);
ops.atan2seq(arr2, 2);
ops.pow(arr1, arr2, arr3);
ops.pows(arr1, arr2, 2);
ops.poweq(arr1, arr2);
ops.powseq(arr2, 2);

ops.atan2op(arr1, arr2, arr3);
ops.atan2ops(arr1, arr2, 2);
ops.atan2opeq(arr1, arr2);
ops.atan2opseq(arr2, 2);
ops.powop(arr1, arr2, arr3);
ops.powops(arr1, arr2, 2);
ops.powopeq(arr1, arr2);
ops.powopseq(arr2, 2);
ops.any(arr2);
ops.all(arr2);
ops.sum(arr2);
ops.prod(arr2);
ops.norm2squared(arr2);
ops.norm2(arr2);
ops.norminf(arr2);
ops.norm1(arr2);
ops.sup(arr2);
ops.inf(arr2);
ops.argmin(4, arr2, arr1);
ops.argmax(4, arr2, arr1);
ops.random(arr2);
ops.assign(arr2, arr2);
ops.assigns(arr2, 2);
ops.equals(arr1, arr2);
