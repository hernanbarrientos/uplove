export const goToHome = (history) => {
    history.push("/")
}

export const goToLogin = (history) => {
    history.push("/Login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToForgot = (history, id) => {
    history.push(`/recuperar-senha/${id}`)
}

export const goToFeed = (history) => {
    history.push("/feed")
}
