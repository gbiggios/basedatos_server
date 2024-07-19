"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsayoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EnsayoSchema = new mongoose_1.Schema({
    fecha: { type: Date, required: true },
    objetivo: { type: String, required: true },
    asistencia: [{
            miembroID: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Member' },
            presente: { type: Boolean, required: true }
        }]
});
//# sourceMappingURL=ensayos.schemas.js.map