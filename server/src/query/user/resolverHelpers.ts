import { GetTestOptions, TestDataSent, UserTestDataInput } from "../../__generated__/graphql";
import { DbError, InputValidationError } from "../../customErrors/errors";
import pgPool from "../../postgresClient/pgClient";
import { getUserDataQuery, getUserGeneralTestDataQuery, getUserSubjectWiseTestDataQuery, saveUserTestDataQuery, testBasedOnPaperYearQuery, testBasedOnRandomOption, testBasedOnSubjectQuery } from "../../sqlQueries/reusedSQLQueries";


export async function GetUserData() {
  const userData = await pgPool.query(getUserDataQuery, ["hamza@gmail.com"])
  if (!userData.rowCount) throw new DbError("failed to get the user Data")
  return userData.rows[0]
}

export async function GetTestBasedOnOptions(
  _parent: unknown,
  { input }: { input: GetTestOptions }
) {
  const { paperCategory, paperYear, paperSubject, giveRandomTest, academyName, limit } = input
  if (paperYear) {
    const specificYearPaper = await pgPool.query<TestDataSent>(
      testBasedOnPaperYearQuery
      , [paperYear, paperCategory, academyName])
    if (!specificYearPaper.rowCount) throw new DbError("failed to get the specific year test")
    return specificYearPaper.rows
  }
  if (paperSubject) {
    const specificSubjectMCQ = await pgPool.query<TestDataSent>(
      testBasedOnSubjectQuery
      , [paperCategory, academyName, paperSubject])
    if (!specificSubjectMCQ.rowCount) throw new DbError("failed to get the specific year test")
    return specificSubjectMCQ.rows

  }
  if (giveRandomTest) {
    const controlledLimit = limit || 20
    const randomMCQ = await pgPool.query<TestDataSent>(
      testBasedOnRandomOption, [paperCategory, academyName, controlledLimit])
    if (!randomMCQ.rowCount) throw new DbError("failed to get the random tests")
    return randomMCQ.rows
  }
  throw new InputValidationError("inputs provided are incorrect")
}

export async function SaveUserTestData(
  _parent: unknown,
  { input: { totalSolved, totalWrong, totalCorrect, subject } }: { input: UserTestDataInput }
) {
  const savedUserTestData = await pgPool.query(saveUserTestDataQuery, ['f415284b-87b4-4206-a79f-5bd61b00de97'
    , subject, totalSolved, totalCorrect, totalWrong])
  if (!savedUserTestData.rowCount) throw new DbError("failed to save the user data")
  return true
}

export async function GetUserPersonalTestData() {
  const userGeneralTestData = await pgPool.query(getUserGeneralTestDataQuery, ['f415284b-87b4-4206-a79f-5bd61b00de97'])
  const userSubjectWiseTestData = await pgPool.query(getUserSubjectWiseTestDataQuery, ['f415284b-87b4-4206-a79f-5bd61b00de97'])
  if (!userGeneralTestData.rowCount || !userSubjectWiseTestData.rowCount) throw new DbError(
    "failed to get the personalized user data"
  )
  return {
    general: userGeneralTestData.rows,
    subjectWise: userSubjectWiseTestData.rows
  }
}