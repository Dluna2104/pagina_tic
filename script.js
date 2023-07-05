window.onload = function() {
    var loginPage = document.getElementById('loginPage');
    var mainPage = document.getElementById('mainPage');
    var coursePage = document.getElementById('coursePage');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var loginButton = document.getElementById('loginButton');
    var courseCards = document.getElementById('courseCards');
    var courseTitle = document.getElementById('courseTitle');
    var courseMaterials = document.getElementById('courseMaterials');
    var backButton = document.getElementById('backButton'); // Nuevo
  
    var currentUser = null;
  
    loginButton.addEventListener('click', function() {
      var username = usernameInput.value;
      var password = passwordInput.value;
  
      // Simulando autenticación
      if (username === 'daniel' && password === '123') {
        currentUser = 'admin';
        loginPage.style.display = 'none';
        mainPage.style.display = 'block';
        enableFileUpload();
      } else {
        currentUser = 'guest';
        loginPage.style.display = 'none';
        mainPage.style.display = 'block';
        disableFileUpload();
        loadCourses();
      }
    });
  
    function enableFileUpload() {
      var fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('id', 'fileInput');
      fileInput.setAttribute('multiple', 'true');
      fileInput.addEventListener('change', handleFileUpload);
      document.body.appendChild(fileInput);
    }
  
    function disableFileUpload() {
      var fileInput = document.getElementById('fileInput');
      if (fileInput) {
        fileInput.remove();
      }
    }
  
    function handleFileUpload(e) {
      var files = e.target.files;
  
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        // Aquí puedes implementar la lógica para subir los archivos como administrador
        console.log('Archivo subido:', file);
      }
    }
  
    function loadCourses() {
      // Simulando carga de datos de cursos
      var courses = [
        { id: 1, title: 'Curso 1' },
        { id: 2, title: 'Curso 2' },
        { id: 3, title: 'Curso 3' }
      ];
  
      courseCards.innerHTML = '';
  
      courses.forEach(function(course) {
        var courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerText = course.title;
        courseCard.addEventListener('click', function() {
          showCoursePage(course);
        });
        courseCards.appendChild(courseCard);
      });
    }
  
    function showCoursePage(course) {
      coursePage.style.display = 'block';
      mainPage.style.display = 'none';
      courseTitle.innerText = course.title;
      loadCourseMaterials(course.id);
    }
  
    function loadCourseMaterials(courseId) {
      // Simulando carga de materiales del curso
      var materials = [
        { id: 1, title: 'Material 1', type: 'pdf', url: 'material1.pdf' },
        { id: 2, title: 'Material 2', type: 'video', url: 'material2.mp4' },
        { id: 3, title: 'Material 3', type: 'pdf', url: 'material3.pdf' }
      ];
  
      courseMaterials.innerHTML = '';
  
      materials.forEach(function(material) {
        var materialItem = document.createElement('div');
        materialItem.classList.add('material-item');
        materialItem.innerHTML = `<a href="${material.url}" download>${material.title}</a>`;
        courseMaterials.appendChild(materialItem);
      });
  
      // Agregar el botón de regreso al login
      backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Volver al login';
      backButton.addEventListener('click', function() {
        coursePage.style.display = 'none';
        loginPage.style.display = 'block';
      });
    }
  };
  