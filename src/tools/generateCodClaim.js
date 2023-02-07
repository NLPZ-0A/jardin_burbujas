
const generateId = () => {
    const id = Math.random().toString(36).substr(2, 18);
    return id;
};

module.exports = {generateId}