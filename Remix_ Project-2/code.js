var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var pin1 = createSprite(200, 300,20,20);
var pin2 = createSprite(180, 320,20,20);
var pin3 = createSprite(220, 320,20,20);
var pin4 = createSprite(160, 340,20,20);
var pin5 = createSprite(200, 340,20,20);
var pin6 = createSprite(240, 340,20,20);
var ball = createSprite(200, 200,20,20);


ball.shapeColor="White";



ball.velocityX=5;
ball.velocityY=13;





function draw() {
 background("Skyblue");
createEdgeSprites();
 
ball.bounceOff(topEdge);
ball.bounceOff(bottomEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(edges);

pin1.bounceOff(edges);
pin2.bounceOff(edges);
pin3.bounceOff(edges);
pin4.bounceOff(edges);
pin5.bounceOff(edges);
pin6.bounceOff(edges);

pin1.bounce(edges);
pin2.bounce(edges);
pin3.bounce(edges);
pin4.bounce(edges);
pin5.bounce(edges);
pin6.bounce(edges);

ball.bounce(pin1);
ball.bounce(pin2);
ball.bounce(pin3);
ball.bounce(pin4);
ball.bounce(pin5);
ball.bounce(pin6);

ball.collide(pin1);
ball.collide(pin2);
ball.collide(pin3);
ball.collide(pin4);
ball.collide(pin5);
ball.collide(pin6);

pin1.bounce(pin2);
pin1.bounce(pin3);
pin1.bounce(pin4);
pin1.bounce(pin5);
pin1.bounce(pin6);

pin2.bounce(pin1);
pin2.bounce(pin3);
pin2.bounce(pin4);
pin2.bounce(pin5);
pin2.bounce(pin6);

pin3.bounce(pin1);
pin3.bounce(pin2);
pin3.bounce(pin4);
pin3.bounce(pin5);
pin3.bounce(pin6);

pin4.bounce(pin1);
pin4.bounce(pin2);
pin4.bounce(pin3);
pin4.bounce(pin5);
pin4.bounce(pin6);

pin5.bounce(pin1);
pin5.bounce(pin2);
pin5.bounce(pin3);
pin5.bounce(pin4);
pin5.bounce(pin6);

pin6.bounce(pin1);
pin6.bounce(pin2);
pin6.bounce(pin3);
pin6.bounce(pin4);
pin6.bounce(pin5);

pin1.collide(pin2);
pin1.collide(pin3);
pin1.collide(pin4);
pin1.collide(pin5);
pin1.collide(pin6);

pin2.collide(pin1);
pin2.collide(pin3);
pin2.collide(pin4);
pin2.collide(pin5);
pin2.collide(pin6);

pin3.collide(pin1);
pin3.collide(pin2);
pin3.collide(pin4);
pin3.collide(pin5);
pin3.collide(pin6);

pin4.collide(pin1);
pin4.collide(pin2);
pin4.collide(pin3);
pin4.collide(pin5);
pin4.collide(pin6);

pin5.collide(pin1);
pin5.collide(pin2);
pin5.collide(pin3);
pin5.collide(pin4);
pin5.collide(pin5);
pin5.collide(pin6);

pin6.collide(pin1);
pin6.collide(pin2);
pin6.collide(pin3);
pin6.collide(pin4);
pin6.collide(pin5);
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
