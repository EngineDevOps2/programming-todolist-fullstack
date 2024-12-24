-- V2__addcolumn_todolist_table.sql  
DO $$  
BEGIN  
    IF NOT EXISTS (SELECT 1   
                   FROM information_schema.columns   
                   WHERE table_name='todolist'   
                   AND column_name='status') THEN  
        ALTER TABLE todolist  
        ADD COLUMN status VARCHAR(10) DEFAULT 'DRAFT';  
    END IF;  
END $$;