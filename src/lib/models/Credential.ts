import mongoose from 'mongoose';

const CredentialSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Credential || mongoose.model('Credential', CredentialSchema);
