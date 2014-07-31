module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        // 定义分割合并文件的字符
        separator: ';'
      },
      dist: {
        // 待拼接的文件
        src: ['src/**/*.js'],
        // 生成的文件位置
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        // 生成注释并插入到输出文件的顶部
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      // 定义待检测的文件
      files: ['gruntfile.js', 'src/**/*.js'],
      // 配置 JSHint (文档：http://www.jshint.com/docs/)
      options: {
        // 可以在这里重写 JSHint 的默认配置选项
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint','concat','uglify']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask("default", ["jshint","concat","uglify"]);

};