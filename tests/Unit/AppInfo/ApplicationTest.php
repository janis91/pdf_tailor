<?php

/**
 * Nextcloud - PDF Tailor
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the LICENSE file.
 *
 * @author Janis Koehr <janiskoehr@icloud.com>
 * @copyright Janis Koehr 2020
 */
namespace OCA\Tailor\Tests\Unit\AppInfo;

use OCA\Tailor\AppInfo\Application;
use OCA\Tailor\Tests\Unit\TestCase;
use OCP\AppFramework\IAppContainer;


/**
 * Class ApplicationTest
 *
 * @package OCA\Tailor\Tests\Unit\AppInfo
 */
class ApplicationTest extends TestCase {

    /** @var Application */
    protected $app;

    /** @var IAppContainer */
    protected $container;

    protected function setUp() {
        parent::setUp();
        $this->app = new Application();
        $this->container = $this->app->getContainer();
    }

    public function testContainerAppName() {
        $this->app = new Application();
        $this->assertEquals('pdf_tailor', $this->container->getAppName());
    }
}
