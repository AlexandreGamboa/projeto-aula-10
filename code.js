var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7d4b2a63-9e23-4c79-9c50-8ee9d6b4ee81"],"propsByKey":{"7d4b2a63-9e23-4c79-9c50-8ee9d6b4ee81":{"name":"sticker_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6BQzk8lrGjoaJPX9udW5jYpFT8oPRHuH/category_stickers/sticker_03.png","frameSize":{"x":130,"y":112},"frameCount":1,"looping":true,"frameDelay":2,"version":"6BQzk8lrGjoaJPX9udW5jYpFT8oPRHuH","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":112},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6BQzk8lrGjoaJPX9udW5jYpFT8oPRHuH/category_stickers/sticker_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criação do ladrão e diamante
var ladrao=createSprite(10,390,20,20);
var diamante=createSprite(380,20,20,20);
diamante.setAnimation("sticker_03_1");
diamante.scale=0.3;
//criação do laiser 1 e 2
var laiser1=createSprite(100,0,200,5);
laiser1.shapeColor="red";
laiser1.velocityY=2.5;
var laiser2=createSprite(300,0,200,5);
laiser2.shapeColor="red";
laiser2.velocityY=3.2;

function draw() {
  background("white");
 createEdgeSprites();
 laiser1.bounceOff(bottomEdge);
 laiser1.bounceOff(topEdge);
 laiser2.bounceOff(bottomEdge);
 laiser2.bounceOff(topEdge);
 ladrao.bounce(edges);
 
 
 //movimentação do ladrao
 if (keyDown("up")) {
   ladrao.velocityY = -2;
 }
 
 
if (keyDown("down")) {
  ladrao.velocityY = +2;
}

if (keyDown("right")) {
  ladrao.velocityX = +2;
}

if (keyDown("left")) {
  ladrao.velocityX = -2;
}

//texto dependendo se ganha ou se perde
 
 if (laiser1.isTouching(ladrao) || laiser2.isTouching(ladrao)) {
   textSize(24);
   fill(0);
   stroke(0);
   text("Ladrão foi capturado",100,200);
   laiser2.velocity = 0;
   
   
 }
 
 if (ladrao.isTouching(diamante)) {
   textSize(24);
   fill(0);
   stroke(0);
   text("Ladrão roubou o diamante",70,200);
   laiser1.velocity = 0;
   
   
 }
 
 
 
 
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
