export const getGreeting = (): string => {

    const currentHour = new Date().getHours()

    if(currentHour < 12) 
        return "Good Morning"

    if(currentHour < 16)
        return "Good afternoon"

    else return "Good Evening"

}