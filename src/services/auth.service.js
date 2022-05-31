/**
 * Make a request to the server to login user
 * @param {Object} credentials
 * @param {string} credentials.email
 * @param {string} credentials.password
 * @returns {Promise}
 */
export const login = async credentials => {
  try {
    const { data } = await axios.post(`${baseUrl}/login`, credentials)

    return data
  } catch (error) {
    throw new Error('An error occured while logging in, try again')
  }
}

/**
 * Make a request to the server to register a new user
 * @param {Object} credentials - The user data to register
 * @returns {Object} - The user data
 */
export const signup = async credentials => {
  try {
    const { data } = await axios.post(`${baseUrl}/signup`, credentials)

    return data
  } catch (error) {
    throw new Error('An error occured while signing up, try again')
  }
}

/**
 * Create a new chat room
 * @param {string} name
 * @param {string} userId
 * @returns {object} chat room
 */
export const createChatRoom = async (name, userId) => {
  try {
    const { data } = await axios.post(`${baseUrl}/chat-rooms`, { name, userId })

    return data
  } catch (error) {
    throw new Error('An error occured while creating chat room, try again')
  }
}

/**
 * Send a message to a chat room
 * @param {string} chatRoomId
 * @param {string} userId
 * @param {string} message
 * @returns {object} message
 */
export const sendMessage = (chatRoomId, userId, message) => {
  try {
    const { data } = axios.post(
      `${baseUrl}/chat-rooms/${chatRoomId}/messages`,
      { userId, message }
    )

    return data
  } catch (error) {
    throw new Error('An error occured while sending message, try again')
  }
}
