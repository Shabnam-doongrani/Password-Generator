 function generate() {
      const length = document.getElementById("length").value;
      const passwordBox = document.getElementById("password");

      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_-+=<>?/{}[]|~";

      const allChars = upper + lower + numbers + symbols;

      if (length < 3 || length > 20) {
        alert("Please enter a length between 3 and 20");
        return;
      }

      let password = "";
      password += upper[Math.floor(Math.random() * upper.length)];
      password += lower[Math.floor(Math.random() * lower.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += symbols[Math.floor(Math.random() * symbols.length)];

      while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
      }

      // Randomly shuffle password characters
      password = password.split('').sort(() => Math.random() - 0.5).join('');
      passwordBox.value = password;
    }

    function copyPass() {
      const passwordBox = document.getElementById("password");
      if (!passwordBox.value) {
        alert("Generate a password first!");
        return;
      }
      passwordBox.select();
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    }