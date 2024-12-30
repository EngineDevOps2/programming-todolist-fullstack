package main

import (
	"todolist/router"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	router.InitRoutes(r)
	r.Run(":8000")
}
