Benchmark template running in server side
==================

To measure the performance of rendering jsp and js templates in server side between Java and node.js. Measured time both
on server side rendering and end to end.

Environment
-----
```
Hardware
* Open Stratus Ubuntu VM - emi-ubuntu-12.04-amd64-server-09042012
* 10.9.254.100
* medium | 6GB RAM | 2 VCPU | 30GB Disk
```
```
JSP
* Jetty 9.0.0
* Spring 3.0
* Spring EL
```
```
Node
* v0.10.3
* ExpressJs
* DustJs ( enabled template cache )
```

Test Case
-----
Render the ebay item listing view with 100 items. 
```
* Template to iterate 100 items model
* Data model prepared as static model
* Same html markup
* Apache ab is used to measure end to end performance.
* Manual hit to server to measure the template render time
* Server warmed up before testing.
* Node : http://10.9.254.100:3000/listview, JSP: http://10.9.254.100:8081/SpringMVC/listview
```

Test Result
-----

 | JSP | Node
--- | --- | ---
RenderTime | 5ms | 1ms


Concurrency Load | 95% response time of JSP(ms) | 95% response time of Node(ms)
--- | --- | ---
5 | 33 | 16
10 | 75 | 34
50 | 230 | 180
100 | 445 | 250


```
AB Command
ab -k -r -n 20000 -c 1000 http://127.0.0.1:8081/SpringMVC/listview

ab -k -r -n 20000 -c 1000 http://127.0.0.1:3000/listview
```
