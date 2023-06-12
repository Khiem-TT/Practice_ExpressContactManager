"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhoneBook1686547419874 = void 0;
class UpdatePhoneBook1686547419874 {
    constructor() {
        this.name = 'UpdatePhoneBook1686547419874';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`phone_book\` ADD \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`phone_book\` DROP COLUMN \`created_at\``);
    }
}
exports.UpdatePhoneBook1686547419874 = UpdatePhoneBook1686547419874;
//# sourceMappingURL=1686547419874-updatePhoneBook.js.map