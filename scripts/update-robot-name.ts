import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateRobotName() {
  try {
    // 更新 ApprovalRecord 表中的产品名称
    const approvalRecords = await prisma.approvalRecord.findMany({
      where: {
        productName: {
          contains: 'MedRobot'
        }
      }
    })

    for (const record of approvalRecords) {
      await prisma.approvalRecord.update({
        where: { id: record.id },
        data: {
          productName: record.productName.replace('MedRobot', 'SurgicalRobot')
        }
      })
    }

    // 更新 ChangeRecord 表中的产品名称
    const changeRecords = await prisma.changeRecord.findMany({
      where: {
        productName: {
          contains: 'MedRobot'
        }
      }
    })

    for (const record of changeRecords) {
      await prisma.changeRecord.update({
        where: { id: record.id },
        data: {
          productName: record.productName.replace('MedRobot', 'SurgicalRobot')
        }
      })
    }

    // 更新 WeeklyReport 表中的相关字段
    const weeklyReports = await prisma.weeklyReport.findMany({
      where: {
        OR: [
          { title: { contains: 'MedRobot' } },
          { content: { contains: 'MedRobot' } },
          { summary: { contains: 'MedRobot' } }
        ]
      }
    })

    for (const report of weeklyReports) {
      await prisma.weeklyReport.update({
        where: { id: report.id },
        data: {
          title: report.title.replace('MedRobot', 'SurgicalRobot'),
          content: report.content.replace('MedRobot', 'SurgicalRobot'),
          summary: report.summary.replace('MedRobot', 'SurgicalRobot')
        }
      })
    }

    console.log(`已更新 ${approvalRecords.length} 条审批记录`)
    console.log(`已更新 ${changeRecords.length} 条变更记录`)
    console.log(`已更新 ${weeklyReports.length} 条周报记录`)
  } catch (error) {
    console.error('更新失败:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateRobotName() 