package main

import (
    "fmt"
    "net/http"
)

var wepage = `<html>
<head>
<title>
Hello from Go!
</title>
</head>
<body style="background-color:powderblue;">
<h1>Hello from Go!</h1>
<p>This is a trial 1.1.</p>
</body>
</html>`

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, wepage)
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("Server listening on port 8080...")
    http.ListenAndServe(":8080", nil)
}
