
function makeUser({
    _id,
    profileImage,
    bigImage,
    dogName,
    gender = "",
    dateOfBirth,
    size = "m",
    email,
    phone,
    plan = "free",
    location = 98,
    postalCode,
    language = "English",
    filterGender = ["f", "m"],
    filterSize = ["s", "m", "l"],
    ageRange = [0, 20],
    maxDistance = 200,
    match = []
}) {

    if (typeof dogName !== "string" || dogName.trim().length === 0) {
        throw new Error("dogname is required")
    }

    if (!email) {
        throw new Error("Email address is required")
    }


    return {
        _id,
        profileImage,
        bigImage,
        dogName,
        gender,
        dateOfBirth,
        // dateOfBirth: new Date(dateOfBirth).toISOString(),
        size,
        email,
        phone,
        plan,
        location,
        postalCode,
        language,
        filterGender,
        filterSize,
        ageRange,
        maxDistance,
        match
    }
}

module.exports = {
    makeUser
}