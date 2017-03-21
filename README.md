 # When it is good idea to not use Node js and Why?
 
  Well Node js is not good for those application which require heavy CPU operations. So In all these applications Node js should not be the first choice, which require heavy calculation algorithms, processing large number of data sets trough loops, Big Mathematical prolems related to calculus or other ,application related to Future Analytics etc.

  We All Know that Node js is a Single threaded Language. So by default single threaded applications uses Single core oF CPU. If you are Multi Core servers then there are some ways to use multiple cores like forking child process and clustering.
  But node js is a new language, besides lot of advantages it has some drawbacks. Clustering makes your code less maintainable.

  As Compared to other language let say Java , if two concurrent users are using some cpu intensive task which takes lot of time.
  then after first request, thread will not be blocked for other users. There CPU does context switching between different threads but in case of Node js, Thread will be blocked for other users if some CPU intensive operation is going on and if we are not using cluster mechanism. 