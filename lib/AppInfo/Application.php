<?php

/**
 * Nextcloud - PDF Tailor
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the LICENSE file.
 *
 * @author Janis Koehr <janiskoehr@icloud.com>
 * @copyright Janis Koehr 2020
 */
namespace OCA\Tailor\AppInfo;

use OC\Files\View;
use OC\Server;
use OCP\AppFramework\App;
use OCP\IContainer;
use OCA\Tailor\Constants\TailorConstants;

/**
 * Class Application
 *
 * @package OCA\Tailor\AppInfo
 */
class Application extends App {

	/**
	 * Application constructor.
	 *
	 * @param array $urlParams
	 */
	public function __construct(array $urlParams = array()) {
		parent::__construct(TailorConstants::APP_NAME, $urlParams);
		$container = $this->getContainer();
		/**
		 * Add the js and style if OCA\Files app is loaded
		 */
		$eventDispatcher = \OC::$server->getEventDispatcher();
		$eventDispatcher->addListener('OCA\Files::loadAdditionalScripts', function () {
			script(TailorConstants::APP_NAME, "chunk-app-vendors");
			script(TailorConstants::APP_NAME, "app");
			style(TailorConstants::APP_NAME, "chunk-app-vendors");
			style(TailorConstants::APP_NAME, "app");
		});
		/**
		 * Register core services
		 */
		$container->registerService('CurrentUID',
			function (IContainer $c) {
				/** @var Server $server */
				$server = $c->query('ServerContainer');
				$user = $server->getUserSession()
					->getUser();
				return ($user) ? $user->getUID() : '';
			});
		// Allow automatic DI for the View, until they migrated to Nodes API
		$container->registerService(View::class, function () {
			return new View('');
		}, false);
	}
}
