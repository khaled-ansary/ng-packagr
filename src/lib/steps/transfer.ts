import { NgPackageData, SCOPE_NAME_SEPARATOR } from './../model/ng-package-data';
import { copyFiles } from './../util/copy';
import * as path from 'path';

/**
 * Copies compiled source files from the build directory to the correct locations in the destination directory.
 *
 * @param ngPkg Angular package data.
 */
export async function copySourceFilesToDestination(ngPkg: NgPackageData): Promise<void> {
  await copyFiles(`${ngPkg.buildDirectory}/**/*`, ngPkg.destinationPath)
  await copyFiles(`${path.resolve(ngPkg.sourcePath, '.ng_pkg_build')}/**/*.{d.ts,metadata.json}`, ngPkg.destinationPath);
}
