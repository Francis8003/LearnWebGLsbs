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
        return ;
    }
    gl.bindBuffer(gl.ARRAY_BUGGER,vertexBuffer);
}