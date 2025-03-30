-- 更新 ApprovalRecord 表中的产品名称
UPDATE "ApprovalRecord"
SET "productName" = REPLACE("productName", 'MedRobot', 'SurgicalRobot')
WHERE "productName" LIKE '%MedRobot%';

-- 更新 ChangeRecord 表中的产品名称
UPDATE "ChangeRecord"
SET "productName" = REPLACE("productName", 'MedRobot', 'SurgicalRobot')
WHERE "productName" LIKE '%MedRobot%';

-- 更新 WeeklyReport 表中的标题
UPDATE "WeeklyReport"
SET "title" = REPLACE("title", 'MedRobot', 'SurgicalRobot')
WHERE "title" LIKE '%MedRobot%';

-- 更新 WeeklyReport 表中的内容
UPDATE "WeeklyReport"
SET "content" = REPLACE("content", 'MedRobot', 'SurgicalRobot')
WHERE "content" LIKE '%MedRobot%';

-- 更新 WeeklyReport 表中的摘要
UPDATE "WeeklyReport"
SET "summary" = REPLACE("summary", 'MedRobot', 'SurgicalRobot')
WHERE "summary" LIKE '%MedRobot%'; 