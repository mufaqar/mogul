import {
  agentData,
  customerData,
  customerReviewsData,
  dataTableRecords,
  pricingData,
  projectsData,
  propertyData,
  timelineData,
  transactionData,
  userData,
} from '@/assets/data/other'
import { sellersData } from '@/assets/data/product'
import { emailsData, socialGroupsData } from '@/assets/data/social'
import { todoData } from '@/assets/data/task'
import { notificationsData } from '@/assets/data/topbar'
import {
  AgentType,
  CustomerReviewsType,
  CustomerType,
  EmailCountType,
  Employee,
  GroupType,
  NotificationType,
  PricingType,
  ProjectType,
  PropertyType,
  TimelineType,
  TodoType,
  TransactionType,
  UserType,
} from '@/types/data'
import { sleep } from '@/utils/promise'
import * as yup from 'yup'

export const getNotifications = async (): Promise<NotificationType[]> => {
  return notificationsData
}

export const getAllUsers = async (): Promise<UserType[]> => {
  return userData
}

export const getAllProperty = async (): Promise<PropertyType[]> => {
  return propertyData
}

export const getAllTransaction = async (): Promise<TransactionType[]> => {
  const data = transactionData.map((item) => {
    const user = userData.find((user) => user.id === item.userId)
    const property = propertyData.find((property) => property.id == item.propertyId)
    return {
      ...item,
      user,
      property,
    }
  })
  await sleep()
  return data
}

export const getAllTimeline = async (): Promise<TimelineType> => {
  await sleep()
  return timelineData
}

export const getAllAgent = async (): Promise<AgentType[]> => {
  const data = agentData.map((item) => {
    const user = userData.find((user) => user.id == item.userId)
    return {
      ...item,
      user,
    }
  })
  await sleep()
  return data
}

export const getAllPricingPlans = async (): Promise<PricingType[]> => {
  await sleep()
  return pricingData
}

export const getAllCustomer = async (): Promise<CustomerType[]> => {
  const data = customerData.map((item) => {
    const user = userData.find((user) => user.id == item.userId)
    return {
      ...item,
      user,
    }
  })
  await sleep()
  return data
}

export const getAllReview = async (): Promise<CustomerReviewsType[]> => {
  const data = customerReviewsData.map((item) => {
    const user = userData.find((user) => user.id === item.userId)
    const property = propertyData.find((property) => property.id == item.propertyId)
    return {
      ...item,
      user,
      property,
    }
  })
  await sleep()
  return data
}

export const getUserById = async (id: UserType['id']): Promise<UserType | void> => {
  const user = userData.find((user) => user.id === id)
  if (user) {
    await sleep()
    return user
  }
}

export const getJoinedGroups = async (): Promise<GroupType[]> => {
  return socialGroupsData
}

export const getEmailsCategoryCount = async (): Promise<EmailCountType> => {
  const mailsCount: EmailCountType = { inbox: 0, starred: 0, draft: 0, sent: 0, deleted: 0, important: 0 }
  mailsCount.inbox = emailsData.filter((email) => email.toId === '101').length
  mailsCount.starred = emailsData.filter((email) => email.starred).length
  mailsCount.draft = emailsData.filter((email) => email.draft).length
  mailsCount.sent = emailsData.filter((email) => email.fromId === '101').length
  mailsCount.important = emailsData.filter((email) => email.important).length
  await sleep()
  return mailsCount
}

export const getAllProjects = async (): Promise<ProjectType[]> => {
  await sleep()
  return projectsData
}

export const getAllTasks = async (): Promise<TodoType[]> => {
  const data = todoData.map((task) => {
    const employee = sellersData.find((seller) => seller.id === task.employeeId)
    return {
      ...task,
      employee,
    }
  })
  await sleep()
  return data
}

export const getAllFriends = async (): Promise<UserType[]> => {
  const data = userData.filter((user) => !user?.hasRequested)
  await sleep()
  return data
}

export const serverSideFormValidate = async (data: unknown): Promise<unknown> => {
  const formSchema = yup.object({
    fName: yup
      .string()
      .min(3, 'First name should have at least 3 characters')
      .max(50, 'First name should not be more than 50 characters')
      .required('First name is required'),
    lName: yup
      .string()
      .min(3, 'Last name should have at least 3 characters')
      .max(50, 'Last name should not be more than 50 characters')
      .required('Last name is required'),
    username: yup
      .string()
      .min(3, 'Username should have at least 3 characters')
      .max(20, 'Username should not be more than 20 characters')
      .required('Username is required'),
    city: yup
      .string()
      .min(3, 'City should have at least 3 characters')
      .max(20, 'City should not be more than 20 characters')
      .required('City is required'),
    state: yup
      .string()
      .min(3, 'State should have at least 3 characters')
      .max(20, 'State should not be more than 20 characters')
      .required('State is required'),
    zip: yup.number().required('ZIP is required'),
  })

  try {
    const validatedObj = await formSchema.validate(data, { abortEarly: false })
    return validatedObj
  } catch (error) {
    return error
  }
}

export const getAllDataTableRecords = async (): Promise<Employee[]> => {
  await sleep()
  return dataTableRecords
}
