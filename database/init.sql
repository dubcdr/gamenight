-- Game Night Database Initialization Script
-- This script runs automatically when the postgres container is first created

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create initial schema (migrations will handle tables)
-- Add any initial setup here

-- Example: Create a simple health check function
CREATE OR REPLACE FUNCTION database_version() RETURNS TEXT AS $$
BEGIN
    RETURN version();
END;
$$ LANGUAGE plpgsql;

-- Grant necessary permissions
GRANT ALL PRIVILEGES ON DATABASE gamenight TO gamenight;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO gamenight;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO gamenight;
