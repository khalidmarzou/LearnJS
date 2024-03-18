function getModule(x) {
  setTimeout(() => x, 2000);
}
function getNote(x) {
  setTimeout(() => x, 2000);
}

async function test1() {
  try {
    const a = await getModule("ALGO");
    const b = await getNote(17);
    console.log(a);
    console.log(b);
    if (b < 10) {
      // Error personell
      throw "La note est inf a 10";
    }
  } catch (err) {
    console.log("failed");
  } finally {
    console.log("finally");
  }
}

test1();

console.log(getModule("test"));
