const formatDate = (date: string) => {
    return date.split("-").join("/");
};

export default formatDate;
