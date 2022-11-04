/*global angular */
import { react2angular} from 'react2angular';
import Todo from '../../Todo';
import TodoList from '../../todoList'
/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
// .component('reactTodo', react2angular(Todo,[]))

angular.module('todomvc', ['ngRoute'])
	.component('reactTodo', react2angular(Todo))
	.component('reactTodoList', react2angular(TodoList))
	.config(["$routeProvider",function ($routeProvider) {
		'use strict';
		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
			store: [ "todoStorage", function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}]
			}
		};

		var routeReactComponentList = {
			templateUrl: 'todomvc-react.html',
			
		};

		$routeProvider
			.when('/react',routeReactComponentList)
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});

	}]);
