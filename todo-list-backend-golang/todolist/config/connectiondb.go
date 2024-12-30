package config

import (
	"todolist/model"
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func Connection_DB() *gorm.DB {
	dsn := "host=db user=leyla password=123456 dbname=todolist4 port=5432 sslmode=disable TimeZone=Asia/Tehran"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	//	db.LogMode(true)
	if err != nil {
		fmt.Println("Error Connection Database")
		log.Fatal(err)
		panic(err)
	}
	fmt.Println("Connected to Database ...")

	db.AutoMigrate(&model.Todo{})

	return db
}
