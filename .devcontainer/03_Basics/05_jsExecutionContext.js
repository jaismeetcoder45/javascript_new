/* 
{} -> 1. global execution context. It is referred by this.
 2. Function execution context
 3. Eval Execution context (ony for read) 

 How js code is run ?
    {}  -> Memory creation Phase
        -> execution Phase

    Step 1: Global execution -> this
    Step 2: Memory Phase (all variables are allocated and put in memory)
        here like variables names are defined as:-
            val1 = undefinded
            val2 = undefined
            total = undefined
    Step 3: Execution Phase (here values to variables are given to them)
        here:-
            total = 15 (like this)
            this total is return in global execution

    This all things like memory and execution phase then happen in new new variable environment + thread
    
    # Call stack -> works on the principle of stack
*/