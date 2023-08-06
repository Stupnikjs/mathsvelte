
<pre class="smallfont bg-black">
    <code class="text-white">
        def gsBasis(A) :
        B = np.array(A, dtype=np.float_) # copy of A
        # Loop over vectors,
        for i in range(B.shape[1]) :
            # loop over all previous vectors, j, to subtract.
            for j in range(i) :
                B[:, i] = B[:, i] - B[:, i] @ B[:, j] * B[:, j]
            # Next insert code to do the normalisation test for B[:, i]
            if la.norm(B[:, i]) > verySmallNumber :
                B[:, i] = B[:, i] / la.norm(B[:, i])
            else :
                B[:, i] = np.zeros_like(B[:, i])
                
            
                
        # Finally, we return the result:
        return B

    </code>   
</pre>


<style>

    .smallfont{
        font-size: .45rem;
    }
</style>