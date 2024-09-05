export const IsPhoneNumber = (target: string): boolean => /^(?:(?:\+|00)86)?1\d{10}$/.test(target)

export const IsIdCard = (target: string): boolean => /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(target)

export const IsEmail = (target: string): boolean => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(target)

export const IsChineseName = (target: string): boolean => /^(?:[\u4E00-\u9FA5·]{2,16})$/.test(target)

export const IsEnglishName = (target: string): boolean => /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(target)

export const IsChineseFont = (target: string): boolean => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(target)

// Is the password strong enough
// It must be at least 6 characters long and must include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.
export const IsPasswordStrong = (target: string): boolean => /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(target)
