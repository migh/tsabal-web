(function (angular, THREE) {
  var app = angular.module('app');

  app.factory('three', ['STATIC', threeService]);

  // Currently THREE is global but it should not be
  function threeService(GLOBAL) {
    var STATIC = {
      SCREEN_WIDTH: 925,
      SCREEN_HEIGHT: 400,
      CAMERA: {
        viewAngle:  45,
        aspectRatio:  37 / 16,
        nearPlane:  0.1,
        farPlane:  20000,
        position:  { x: 0, y: 0, z: 0 }
      }
    };

    var scene, camera, renderer, light, ambientLight;

    return {
      setDefaultContext: function (containerElement) {

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(STATIC.CAMERA.viewAngle, STATIC.CAMERA.aspectRatio, STATIC.CAMERA.nearPlane, STATIC.CAMERA.farPlane);
        camera.position.set(10,50,40);
        camera.lookAt(scene.position);
        renderer = new THREE.WebGLRenderer( {canvas: containerElement, antialias:true, alpha: false} );

        scene.add(camera);

        light = new THREE.PointLight(0xffffff);
        light.position.set(0,250,0);
        scene.add(light);

        ambientLight = new THREE.AmbientLight(0x111111);
        scene.add(ambientLight);

        var axisHelper = new THREE.AxisHelper( 5 );
        scene.add( axisHelper );

        controls = new THREE.OrbitControls( camera, renderer.domElement );
      },
      startPipeline: function () {
        function animate(){
          requestAnimationFrame( animate );
          render();
          update();

        }

        function update(){
          // // delta = change in time since last call (in seconds)
          // var delta = clock.getDelta();
          //
          // // functionality provided by THREEx.KeyboardState.js
          // if ( keyboard.pressed("1") )
          //   alert(' Have a nice day! - 1');
          // if ( keyboard.pressed("2") )
          //   alert(' Have a nice day! - 2');
          //
          // controls.update();
          // stats.update();
        }

        function render(){
          renderer.render( scene, camera );
        }

        animate();
      }
    }
  }
})(window.angular, window.THREE);