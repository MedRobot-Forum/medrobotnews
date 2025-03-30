import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateCompanyName() {
  try {
    // 更新 ApprovalRecord 表
    const updatedApprovals = await prisma.approvalRecord.updateMany({
      where: {
        companyName: '血管介入公司'
      },
      data: {
        companyName: '北京万思'
      }
    })

    // 更新 ChangeRecord 表
    const updatedChanges = await prisma.changeRecord.updateMany({
      where: {
        companyName: '血管介入公司'
      },
      data: {
        companyName: '北京万思'
      }
    })

    console.log(`已更新 ${updatedApprovals.count} 条审批记录`)
    console.log(`已更新 ${updatedChanges.count} 条变更记录`)
  } catch (error) {
    console.error('更新失败:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateCompanyName() 