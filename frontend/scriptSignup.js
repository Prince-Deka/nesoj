
      let inputs = document.querySelectorAll('.input-field');
      inputs.forEach(input => {
          input.addEventListener('focus', function() {
              this.classList.add('interacted');
              this.nextElementSibling.style.color = '#0ac5ab';
          });
          input.addEventListener('blur', function() {
              if (!this.value) {
                  this.nextElementSibling.style.color = 'black';
                  this.style.borderBottomColor = 'black !important';
              } else {
                  this.nextElementSibling.style.top = '-20px';
                  this.nextElementSibling.style.fontSize = '14px';
              }
          });
      });