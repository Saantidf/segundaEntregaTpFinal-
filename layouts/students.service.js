import mongoose from 'mongoose'

class StudentService {
async gatAllStudesnForView(limit = 100000, page = 1, gender = false) {
    var filter = {};

    if (gender) {
        filter = { gender };
    }

    return this.module.paginate(filter, {learn: true, page, limit});
};
};
