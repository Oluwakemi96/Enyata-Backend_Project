ALTER TABLE application_entries 
ADD COLUMN batch_id VARCHAR(50) references batches(batch_id)
ON UPDATE CASCADE ON DELETE RESTRICT;