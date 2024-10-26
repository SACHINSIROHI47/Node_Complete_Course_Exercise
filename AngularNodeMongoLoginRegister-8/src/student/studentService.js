var studentModel = require("./studentModel");
var key = "123456789trytryrtyr";
var encrypter = require('simple-encryptor')(key);

module.exports.createStudentDBService = (studentDetails) => {
    return new Promise((resolve, reject) => 
    {
         studentModel.findOne({ email: studentDetails.email }).then(existingStudent=>{
            if(existingStudent)
            {
                reject({stutus:false,message:"Email already exists"});
            }
            else
            {
                   var studentModelData = new studentModel({
                    firstname: studentDetails.firstname,
                    lastname: studentDetails.lastname,
                    email: studentDetails.email,
                    password: encrypter.encrypt(studentDetails.password)
            });
     
        studentModelData.save()
            .then((result) => {
                resolve({status:true,message:"user Created successfully"});
            })
            .catch((error) => {
                reject ({status:false,message:"Error Creating User"});
            });
        }
    }).catch((error) => {
        reject ({status:false,message:"User Already Exists"});
    });
    });
};

module.exports.loginuserDBService = async (studentDetails) => {
    try {
        const result = await studentModel.findOne({ email: studentDetails.email });
        console.log(result);
        console.log(result.password);
        if (result !== null) {
            var decrypted = encrypter.decrypt(result.password);
            if (decrypted === studentDetails.password) {
                return { status: true, msg: "Student Validation successfully" };
            } else {
                throw { status: false, msg: "Student Validation failed" };
            }
        } else {
            throw { status: false, msg: "Invalid Student Details" };
        }
    } catch (error) {
        throw { status: false, msg: "Invalid Data" };
    }
};
