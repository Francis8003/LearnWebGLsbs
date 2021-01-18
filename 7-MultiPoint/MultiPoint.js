function main()
{
    var canvas =document.getElementById("webgl");
    var gl=getWebGLContext(canvas);
    
    if(!gl)
    {
        console.log("Failed to get canvas or gl");
        return ;
    }

    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE))
    {
        console.log("Failed to init shaders");
        return ;
    }

    var n=initVertexBuffers(gl);

    if(n<0)
    {
        console.log("Failed to set the positions fo the vertices");
        return ;
    }

    gl.clearColor(0.0,0.0,0.0,1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS,0,  n);
}

function initVertexBuffers(gl)
{
    var vertices=new Float32Array
    (
        [0.0,0.5,-0.5,-0.5,0.5,-0.5]
    );
    var n=3;
    var vertexBuffer=gl.createBuffer();
    if(!vertexBuffer)
    {
        console.log("Failed to create the buffer object");
        return -1;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);
    
    var a_Position=gl.getAttribLocation(gl.program,'a_Position');

    var u_FragColor=gl.getUniformLocation(gl.program,"u_FragColor");

    gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,0,0);

    gl.enableVertexAttribArray(a_Position);

    return n;
}
var VSHADER_SOURCE=
    'attribute vec4 a_Position;'+
    'void main(){'+
    'gl_Position=a_Position;'+
    'gl_PointSize=10.0;'+
    '}';

    var FSHADER_SOURCE=
    'precision mediump float;\n'+
    'uniform vec4 u_FragColor;'+
    'void main(){'+
    'gl_FragColor=u_FragColor;'+
    '}';