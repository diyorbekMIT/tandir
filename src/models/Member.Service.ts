import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errrors";
import { Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel.findOne(
            {memberType: MemberType.RESTAURANT}).exec();
        if (exist) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
        }
        try {
        console.log("passed here");
        const result = await this.memberModel.create(input);
        return result;
        } catch (error) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }

    }

    public async processLogin(input: MemberInput): Promise<Member> {
        const result = await this.memberModel.findOne(
            { memberNick: input.memberNick}, {memberNick: 1, memberPassword:1}
        ).exec();
        if (!result) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.NO_ERROR_NICK);
        }

        const isExist = input.memberPassword === result.memberPassword;
        
        if (!isExist) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        const member = await this.memberModel.findById(result._id).exec();

        console.log("isExist", result);
        return member as Member;
    }
}

export default MemberService;