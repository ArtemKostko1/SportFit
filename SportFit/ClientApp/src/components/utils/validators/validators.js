const Required = (value) => {
    if (value)
        return undefined;
    
    return "Field is required"
}

export default Required;