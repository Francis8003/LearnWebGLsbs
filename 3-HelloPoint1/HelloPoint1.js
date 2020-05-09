function main()
{
    var canvas= document.getElementById('webgl');

    var gl=getWebGLContext(canvas);

    if(!gl)
    {
        Console.log('Failed to load , gl is null');
        return;
    }

    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE))
    {
        Console.log('Failed to initialize shaders');
        return ;
    }
    gl.clearColor(0.0,0.0,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS,0,1);
}

var VSHADER_SOURCE=
'void main(){\n'+
'gl_Position=vec4(0.0,0.0,0.0,1.0);\n'+
'gl_PointSize=10.0;'+
'}\n';
var FSHADER_SOURCE=
'void main(){ gl_FragColor=vec4(1.0,0.0,0.0,1.0);}';