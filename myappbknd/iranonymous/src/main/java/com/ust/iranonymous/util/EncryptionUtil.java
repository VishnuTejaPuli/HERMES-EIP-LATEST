package com.ust.iranonymous.util;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Base64;

public class EncryptionUtil {

    private static final String ALGORITHM = "AES"; // Choose an appropriate algorithm
    private static final String KEY = "angularspringbootmysqlanonymouss"; // Must be 16 bytes for AES-128

    private static Key generateKey() throws Exception {
        return new SecretKeySpec(KEY.getBytes("UTF-8"), ALGORITHM);
    }

    // Encrypt method
    public static String encrypt(String value) {
        try {
            Key key = generateKey();
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, key);
            byte[] encryptedBytes = cipher.doFinal(value.getBytes());
            return Base64.getEncoder().encodeToString(encryptedBytes);
        } catch (Exception e) {
            throw new RuntimeException("Error while encrypting", e);
        }
    }

    // Decrypt method
    public static String decrypt(String encryptedValue) {
        try {
            Key key = generateKey();
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, key);
            byte[] decryptedBytes = cipher.doFinal(Base64.getDecoder().decode(encryptedValue));
            return new String(decryptedBytes);
        } catch (Exception e) {
            throw new RuntimeException("Error while decrypting", e);
        }
    }

    // Method to encrypt Long by converting it to String
    public static String encrypt(Long value) {
        return encrypt(String.valueOf(value));
    }

    // Method to decrypt and convert it back to Long
    // public static Long decryptToLong(String encryptedValue) {
    //     String decryptedString = decrypt(encryptedValue);
    //     return Long.parseLong(decryptedString);
    // }
}
